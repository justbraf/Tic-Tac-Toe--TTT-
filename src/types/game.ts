/**
 * Type definitions for Tic Tac Toe game
 */

// This variable only accepts the values of X or O
export type Player = 'X' | 'O';

// This variable only accepts the values of Player (defined above) or null
export type CellValue = Player | null;

// An array to hold the values of each cell of type CellValue defined above
export type Board = CellValue[];

// This variable only accepts the vaules listed
export type GameStatus = 'playing' | 'won' | 'draw';

export type Winner = Player | null;

// defines a custom type consisting of many other types
export interface GameState {
  board: Board;
  currentPlayer: Player;
  status: GameStatus;
  winner: Winner;
  winningCells: number[];
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

export type GameAction =
  | { type: 'MAKE_MOVE'; index: number }
  | { type: 'NEW_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'RESET_SCORES' };

export const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
] as const;

// this variable is defined as a sub type of the WIN_PATTERNS array
// by extracting a single index (array) from the array of arrays
export type WinPattern = (typeof WIN_PATTERNS)[number];

// declare an array and fill it with emptiness (null value)
export const INITIAL_BOARD: Board = Array(9).fill(null);

// create a constant using the GameState type
export const INITIAL_STATE: GameState = {
  board: INITIAL_BOARD,
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningCells: [],
  scores: { X: 0, O: 0, draws: 0 },
};