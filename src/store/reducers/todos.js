const INITIAL_STATE = [
  { id: 0, text: 'Fazer café' },
  { id: 1, text: 'Estudar GoReact' },
  { id: 2, text: 'Entrar na comunidade' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
