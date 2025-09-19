import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({//function for reading data
    args: {},//no arguments 
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos")//get data from todos table
            .order("desc")//order by creation time
            .collect()//return all matching todos as an array
        return todos
    }
})

export const addTodo = mutation({
    args: { text: v.string() },//takes tdotext
    handler: async (ctx,args) => {
        const todoId = await ctx.db.insert("todos", {//create a todo
            text: args.text, 
            isCompleted : false
        })
        return todoId
    }
})