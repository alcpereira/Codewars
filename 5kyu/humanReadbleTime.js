function humanReadable(seconds) {
  out = ''
  if (seconds >= 3600) {
    h = Math.floor(seconds / 3600)
    out += (h < 10) ? `0${h}:` : `${h}:`
    seconds = seconds - (h * 3600)
  } else {
    out += '00:'
  }

  if (seconds >= 60) {
    m = Math.floor(seconds / 60)
    out += (m < 10) ? `0${m}:` : `${m}:`
    seconds = seconds - (m * 60)
  } else {
    out += '00:'
  }

  out += (seconds < 10) ? `0${seconds}` : `${seconds}`

  return out
}