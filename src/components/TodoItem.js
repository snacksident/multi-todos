import React from "react"
import { useDoc } from "@syncstate/react"

export default function TodoItem({ todoItemPath, todo }) {
    return (
        <div>
            <div className="d-flex align-content-center">
                <div className="d-flex align-items-center todoTile">
                    <div style={{ width: "100%" }}>{todo.caption}</div>
                </div>
            </div>
        </div>
    )
}
