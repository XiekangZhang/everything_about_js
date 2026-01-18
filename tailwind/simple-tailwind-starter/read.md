npm init -y
npm install tailwindcss @tailwindcss/cli
@import "tailwindcss" in input.css
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch