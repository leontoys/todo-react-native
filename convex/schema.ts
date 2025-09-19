import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({ //wraps entire db structure
    todos: defineTable({//creates table
        text: v.string(), //v - validators
        isCompleted : v.boolean()
    })
})

