export function selectBook(book) {
  // selectBook is an bindActionCreators, it needs to return an action and a payload

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
