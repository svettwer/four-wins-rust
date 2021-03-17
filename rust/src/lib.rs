mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct FourWins {
    layout: [[i8; 6]; 7],
    pub current_player: i8
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
            current_player: 1
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