import { query } from "./_generated/server";

export const getTodos = query({//function for reading data
    args: {},//no arguments 
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos")//get data from todos table
            .order("desc")//order by creation time
            .collect()//return all matching todos as an array
        return todos
    }
})