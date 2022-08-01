function hello(css: string): string {
  const el = document.querySelector(css)
  console.log(el)
  return 'done'  
}

const html = `${hello}`
console.log(html)
