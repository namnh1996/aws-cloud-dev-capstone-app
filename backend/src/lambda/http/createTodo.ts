import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
// import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
// import { createTodo } from '../../datalayer/todosAcess'
import { todoBuider } from '../../businessLogic/todos'
// export const handler = middy(
//   async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     const newTodo: CreateTodoRequest = JSON.parse(event.body)
//     // TODO: Implement creating a new TODO item
//     const todo = todoBuider(newTodo, event)
//     await createTodo(todo)
//     return {
//       statusCode: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Credentials': true
//       },
//       body: JSON.stringify({
//         todo
//       })
//     }
//   }
// )

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO: Implement creating a new TODO item
    const item = await todoBuider(event)
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({ msg: 'To-do Item was created', item })
    }
  }
)
handler.use(
  cors({
    credentials: true
  })
)
