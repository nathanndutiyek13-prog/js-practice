# JavaScript Variable Rules Learned

1. **Hoisting**: `var` is hoisted and initialized as `undefined`. `let` and `const` are hoisted but inaccessible until declared (Temporal Dead Zone).
2. **Scope**: `var` is function-scoped and leaks out of `if` blocks or loops. `let` and `const` are block-scoped to curly braces `{}`.
3. **Const Mutation**: `const` prevents variable reassignment, but allows modification of internal object properties.
