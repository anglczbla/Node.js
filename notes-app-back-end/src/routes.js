const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler,  deleteNoteByIdHandler, } = require('./handler');
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler:   editNoteByIdHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
 },
{
  method: 'GET',
  path: '/notes/{id}',
  handler: getNoteByIdHandler,
},
{
  method: 'DELETE',
  path: '/notes/{id}',
  handler:  deleteNoteByIdHandler,
},
];