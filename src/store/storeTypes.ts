export interface INotes {
  id: number;
  noteNumber: number;
  text: string;
  signature: string;
  time: string;
}

export interface INotesState {
  notes: INotes[];
  countNote: number;
}
