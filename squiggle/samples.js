import { run } from "@quri/squiggle-lang";

let squiggle_code = `
p_a = 0.8
p_b = 0.5
p_c = p_a * p_b

result = mx([0, 1, 1 to 3, 2 to 10], [(1 - p_c), p_c/2, p_c/4, p_c/4 ])
mean(result)
`

let output = run(squiggle_code)
console.log(output.result.value)
