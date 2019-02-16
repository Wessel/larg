/**
 * Parse arguments of an array
 * @param {Array} args - The arguments to parse
 * @returns {Object} - The parsed arguments
 */
module.exports = (args) => {
  let p = {};
  let l = [];

  const rHyphens    = (v) => v.replace(/^\-+/g, '');
  const cApplicable = (v) => ( isNaN(v) ? (v.toString().toLowerCase() === 'true' ? true : (v.toString().toLowerCase() === 'false' ? false : v)) : Number(v));

  for (let _ = 0; _ < args.length; _++) {
    const e = args[i].indexOf('=');
    const r = args[i].charAt(0) === '-' && args.length - 1 >= i + 1 && args[_ + 1].indexOf('=') === -1 && args[_ + 1].charAt(0) !== '-';
    const n = e === -1 ? rHyphens(args[_]) : rHyphens(args[_].slice(0, e));

    if ( e !== -1 ) p[ n ] = cApplicable( args[ i ].slice(e + 1));
    else if (r) {
      p[n] = cApplicable(args[_ + 1] );
      _++;
    } else if (args[_].charAt(0) === '-') {
      if (args[_].charAt(1) === '-' ) p[n] = true;
      else for (let b = 0; b < n.length; b++) p[n.charAt(b)] = true;
    } else l.push(cApplicable(n));
  }

  return Object.assign(p, { '_': l });
};