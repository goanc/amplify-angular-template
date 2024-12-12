import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
// const schema = a.schema({
//   Todo: a
//     .model({
//       content: a.string(),
//     })
//     .authorization((allow) => [allow.publicApiKey()]),
// });

// export type Schema = ClientSchema<typeof schema>;

// export const data = defineData({
//   schema,
//   authorizationModes: {
//     defaultAuthorizationMode: 'apiKey',
//     // API Key is used for a.allow.public() rules
//     apiKeyAuthorizationMode: {
//       expiresInDays: 30,
//     },
//   },
// });

//npx ampx generate outputs --app-id dfcm3a3wclj26 --branch main

const schema = a.schema({
  UserProfile: a
    .model({
      // Basic user identification
      email: a.string().required(),
      username: a.string().required(),
      
      // Optional profile details
      firstName: a.string(),
      lastName: a.string(),
      profilePictureUrl: a.string(),
      
      // Metadata fields
      dateOfBirth: a.date(),
      registrationDate: a.datetime().default('${now}'),
      
      // Optional preferences or settings
      preferences: a.json(),
      
      // Example of adding relationships (optional)
      // posts: a.hasMany('Post')  // If you want to link to another model later
    })
    .authorization((allow) => [
      allow.authenticated().to(['read', 'create', 'update', 'delete']),
      allow.guest().to(['read'])  // Optionally allow public read access
    ]),
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool', // More appropriate for user profiles
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
