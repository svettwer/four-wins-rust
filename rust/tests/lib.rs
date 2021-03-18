#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);
use four_wins::FourWins;

#[wasm_bindgen_test]
fn get_winner_on_cols() {
    
    //GIVEN
    let mut game = FourWins::new();

    //WHEN
    game.player_action(0);
    game.player_action(1);
    game.player_action(0);
    game.player_action(1);
    game.player_action(0);
    game.player_action(1);
    game.player_action(0);

    //THEN
    assert_eq!(game.get_winner(), Some(1));
}

#[wasm_bindgen_test]
fn get_winner_on_rows() {
    
    //GIVEN
    let mut game = FourWins::new();

    //WHEN
    game.player_action(0);
    game.player_action(0);
    game.player_action(1);
    game.player_action(0);
    game.player_action(2);
    game.player_action(0);
    game.player_action(3);

    //THEN
    assert_eq!(game.get_winner(), Some(1));
}

#[wasm_bindgen_test]
fn player_actions_are_added_to_stack() {
    
    //GIVEN
    let mut game = FourWins::new();
    let expected_array= [0,0,0,1,2,1];

    //WHEN
    game.player_action(0);
    game.player_action(0);
    game.player_action(0);

    //THEN
    let stack = game.get_stack(0);
    for field_id in 0..expected_array.len() {
        assert_eq!(stack.get_index(field_id as u32), expected_array[field_id])
    }
}