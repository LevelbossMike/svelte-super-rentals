/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
  return /getting-in-touch/.test(param);
}