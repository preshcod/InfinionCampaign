export function dateFormat(date) {
    const today = new Date(date)
    const yr = today.getFullYear()
    const m = today.getMonth()
    const d = today.getDate()
    const day = d < 10 ? `0${d}`: d
    const fmt = `${day}/${m+1 < 10 ? `0${m +1}`: m + 1}/${yr}`
    // console.log(fmt);
    return fmt;
}