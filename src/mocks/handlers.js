import { rest } from 'msw';


const personListResolver = (req, res, ctx) => {

  const personList = [
      'test1',
      'test2',
      'test3'
  ];

  return res (
      ctx.status(200),
      ctx.json(personList),
  )
}

export const handlers = [
    rest.get('http://localhost:8080/person-list', personListResolver)
]