import pkg from "pg"

const { Pool } = pkg

export const pool = new Pool({
 connectionString: "postgresql://postgres:TwRUPbJyhEKnhIjRQfZItaZqfoKjKeVF@postgres.railway.internal:5432/railway"
})