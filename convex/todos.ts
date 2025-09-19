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

export const toggleTodo = mutation({
    args: { id: v.id("todos") },
    handler: async (ctx,args) => {
        const todo = await ctx.db.get(args.id)//get the todo
        if (!todo) {
            throw new Error("Todo not found!")
        }
        await ctx.db.patch(args.id, {
            isCompleted : !todo.isCompleted//toggle
        })
    }
})

export const deleteTodo = mutation({
    args: { id: v.id("todos") },
    handler: async (ctx, args) => {
        await ctx.db.delete(args.id)
    }
})

export const updateTodo = mutation({
    args: { id: v.id("todos"), text: v.string() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.id, {
            text : args.text
        })
    }
})

export const clearAllTodos = mutation({
    args: {},
    handler: async (ctx) => {
        const todos = await ctx.db.query("todos").collect()
        for (const todo of todos) {
            await ctx.db.delete(todo._id)
        }
        return { deletedCount: todos.length }

    },
})