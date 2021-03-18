mod utils;

use std::{usize};

use wasm_bindgen::prelude::*;
use js_sys;

#[wasm_bindgen]
#[derive(Copy, Clone)]
pub struct WinConstellation {
    one: (usize, usize),
    two: (usize, usize),
    three: (usize, usize),
    four: (usize, usize),
}

#[wasm_bindgen]
impl WinConstellation {

    pub fn get_as_json(&self) -> String {
        let mut json = String::new();
        json.push('{');
        json.push_str("\"one\": [");
        json.push_str(self.one.0.to_string().as_str());
        json.push_str(", ");
        json.push_str(self.one.1.to_string().as_str());
        json.push_str("]");
        json.push_str(",");
        json.push_str("\"two\": [");
        json.push_str(self.two.0.to_string().as_str());
        json.push_str(", ");
        json.push_str(self.two.1.to_string().as_str());
        json.push_str("]");
        json.push_str(",");
        json.push_str("\"three\": [");
        json.push_str(self.three.0.to_string().as_str());
        json.push_str(", ");
        json.push_str(self.three.1.to_string().as_str());
        json.push_str("]");
        json.push_str(",");
        json.push_str("\"four\": [");
        json.push_str(self.four.0.to_string().as_str());
        json.push_str(", ");
        json.push_str(self.four.1.to_string().as_str());
        json.push_str("]");
        json.push('}');
        json
    }
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
            for index in 0..self.layout[stack].len(){
                let look_ahead_index = index + 1;
                if look_ahead_index < self.layout[stack].len() {
                   if self.layout[stack][look_ahead_index] != 0 {
                    self.layout[stack][index] = self.current_player;
                    break;
                   }
                } else{
                    self.layout[stack][index] = self.current_player;
                    break;
                }
            }
            if self.current_player == 1 {
                self.current_player = 2
            } else{
                self.current_player = 1
            }
        }
    }

    pub fn get_stack(&self, id: usize) -> js_sys::Int8Array  {
        js_sys::Int8Array::from(&self.layout[id][..])
    }

    pub fn get_stack_count(&self) -> usize {
        self.layout.len()
    }

    pub fn get_winner(&mut self) -> Option<i8> {
        struct GameResult{
            player: i8,
            field_count: i8
        }

        //check cols
        for (stack_index, stack) in self.layout.iter().enumerate() {
            let mut game_result = GameResult{player: 0, field_count: 0};
            for (field_index, field) in stack.iter().enumerate() {
                if game_result.player == *field {
                    game_result.field_count += 1;
                }else{
                    game_result.player = *field;
                    game_result.field_count = 1;
                }

                if game_result.player != 0 && game_result.field_count >= 4  {
                    self.win_constellation = Some(WinConstellation{
                        one: (stack_index, field_index-3),
                        two: (stack_index, field_index-2),
                        three: (stack_index, field_index-1),
                        four: (stack_index, field_index),
                    });
                    return Some(game_result.player);
                }
            }
        }

        //check rows
        for row in 0..6 {
            let mut game_result = GameResult{player: 0, field_count: 0};
            for col in 0..7 {
                let field = self.layout[col][row];
                if game_result.player == field {
                    game_result.field_count += 1;
                }else{
                    game_result.player = field;
                    game_result.field_count = 1;
                }

                if game_result.player != 0 && game_result.field_count >= 4  {
                    self.win_constellation = Some(WinConstellation{
                        one: (col-3, row),
                        two: (col-2, row),
                        three: (col-1, row),
                        four: (col, row),
                    });
                    return Some(game_result.player);
                }
            }
        }

        //check diagnal
        for col in 0..7 {
            for row in 0..6 {
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
                        return Some(game_result.player);
                    }
                }

                if col + 3 < 7 && row + 3 < 6 {
                    let mut game_result = GameResult{player: 0, field_count: 0};
                    //to right case
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
                        return Some(game_result.player);
                    }
                }
            }
        }

        None
    }

    pub fn get_win_constellation(&self) -> Option<WinConstellation>{
         return self.win_constellation
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, four-wins!");
}