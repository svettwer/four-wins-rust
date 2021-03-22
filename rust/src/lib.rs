mod utils;

use std::{usize};

use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(Copy, Clone, Deserialize, Serialize)]
pub struct WinConstellation {
    one: (usize, usize),
    two: (usize, usize),
    three: (usize, usize),
    four: (usize, usize),
}

#[wasm_bindgen]
impl WinConstellation {

    pub fn as_json(&self) -> String  {
        serde_json::to_string(self).unwrap()
    }
}

struct GameResult{
    player: i8,
    field_count: i8
}

#[wasm_bindgen]
pub struct FourWins {
    layout: [[i8; 6]; 7],
    pub current_player: i8,
    win_constellation:  Option<WinConstellation>
}

#[wasm_bindgen]
impl FourWins {
    pub fn new() -> FourWins {
        FourWins { 
            layout: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0]
            ],
            current_player: 1,
            win_constellation: None
        }
    }

    pub fn player_action(&mut self, stack: usize){
        if self.layout[stack][0] == 0{
            self.add_coin_to_stack(stack);
            self.switch_player();
        }
    }

    pub fn get_layout_json(&self) -> String {
        serde_json::to_string(&self.layout).unwrap()
    }

    pub fn get_winner(&mut self) -> Option<i8> {

        if let Some(winner) = self.check_columns() {
            return winner;
        }

        if let Some(winner) = self.check_rows() {
            return winner;
        }

        if let Some(winner) = self.check_diagonal() {
            return winner;
        }

        None
    }

    pub fn get_stack(&self, id: usize) -> js_sys::Int8Array  {
        js_sys::Int8Array::from(&self.layout[id][..])
    }

    pub fn get_stack_count(&self) -> usize {
        self.layout.len()
    }


    fn check_rows(&mut self) -> Option<Option<i8>> {
        for row in 0..self.layout[0].len() {
            let mut game_result = GameResult{player: 0, field_count: 0};
            for col in 0..self.layout.len() {
                let field = self.layout[col][row];
                compute_score(&mut game_result, &field);

                if game_won(&game_result)  {
                    self.win_constellation = Some(WinConstellation{
                        one: (col-3, row),
                        two: (col-2, row),
                        three: (col-1, row),
                        four: (col, row),
                    });
                    return Some(Some(game_result.player));
                }
            }
        }
        None
    }

    fn check_columns(&mut self) -> Option<Option<i8>> {
        for (stack_index, stack) in self.layout.iter().enumerate() {
            let mut game_result = GameResult{player: 0, field_count: 0};
            for (field_index, field) in stack.iter().enumerate() {
                compute_score(&mut game_result, field);

                if game_won(&game_result)  {
                    self.win_constellation = Some(
                        WinConstellation{
                            one: (stack_index, field_index-3),
                            two: (stack_index, field_index-2),
                            three: (stack_index, field_index-1),
                            four: (stack_index, field_index),
                    });
                    return Some(Some(game_result.player));
                }
            }
        }
        None
    }

    fn check_diagonal(&mut self) -> Option<Option<i8>> {
        for col in 0..self.layout.len() {
            for row in 0..self.layout[0].len() {
                if let Some(value) = self.check_ascending(col, row) {
                    return value;
                }

                if let Some(value) = self.check_decending(col, row) {
                    return value;
                }
            }
        }
        None
    }

    fn check_decending(&mut self, col: usize, row: usize) -> Option<Option<Option<i8>>> {
        if col + 3 < 7 && row + 3 < 6 {
            let mut game_result = GameResult{player: 0, field_count: 0};
            game_result.player = self.layout[col][row];
            game_result.field_count = 1;
            if self.layout[col+1][row+1] == game_result.player {
                game_result.field_count += 1;
            }
            if self.layout[col+2][row+2] == game_result.player {
                game_result.field_count += 1;
            }
            if self.layout[col+3][row+3] == game_result.player {
                game_result.field_count += 1;
            }

            if game_result.player != 0 && game_result.field_count >= 4  {
                self.win_constellation = Some(WinConstellation{
                    one: (col, row),
                    two: (col+1, row+1),
                    three: (col+2, row+2),
                    four: (col+3, row+3),
                });
                return Some(Some(Some(game_result.player)));
            }
        }
        None
    }

    fn check_ascending(&mut self, col: usize, row: usize) -> Option<Option<Option<i8>>> {
        if col >= 3 && row + 3 < 6 {
            let mut game_result = GameResult{player: 0, field_count: 0};
            //to left case
            game_result.player = self.layout[col][row];
            game_result.field_count = 1;
            if self.layout[col-1][row+1] == game_result.player {
                game_result.field_count += 1;
            }
            if self.layout[col-2][row+2] == game_result.player {
                game_result.field_count += 1;
            }
            if self.layout[col-3][row+3] == game_result.player {
                game_result.field_count += 1;
            }

            if game_result.player != 0 && game_result.field_count >= 4  {
                self.win_constellation = Some(WinConstellation{
                    one: (col, row),
                    two: (col-1, row+1),
                    three: (col-2, row+2),
                    four: (col-3, row+3),
                });
                return Some(Some(Some(game_result.player)));
            }
        }
        None
    }

    pub fn get_win_constellation(&self) -> Option<WinConstellation>{
         return self.win_constellation
    }

    fn add_coin_to_stack(&mut self, stack: usize) {
        let stack_to_manipulate = &mut self.layout[stack];
        for index in 0..stack_to_manipulate.len(){
            let look_ahead_index = index + 1;
            if look_ahead_index < stack_to_manipulate.len() {
               if stack_to_manipulate[look_ahead_index] != 0 {
                stack_to_manipulate[index] = self.current_player;
                break;
               }
            } else{
                stack_to_manipulate[index] = self.current_player;
                break;
            }
        }
    }

    fn switch_player(&mut self) {
        if self.current_player == 1 {
            self.current_player = 2
        } else{
            self.current_player = 1
        }
    }
}

fn compute_score(game_result: &mut GameResult, field: &i8) {
    if same_player(&*game_result, *field) {
        game_result.field_count += 1;
    }else{
        game_result.player = *field;
        game_result.field_count = 1;
    }
}

fn same_player(game_result: &GameResult, field: i8) -> bool {
    game_result.player == field
}

fn game_won(game_result: &GameResult) -> bool {
    game_result.player != 0 && game_result.field_count >= 4
}