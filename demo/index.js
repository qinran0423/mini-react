let taskId = 1
function workloop(deadline) {
  taskId++
  let shouldYeild = false
  while (!shouldYeild) {
    console.log("taskId", taskId)
    shouldYeild = deadline.timeRemaining() < 1
  }

  requestIdleCallback(workloop)
}

requestIdleCallback(workloop)
