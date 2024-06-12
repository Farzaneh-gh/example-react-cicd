
export const getInfo = (object) => {
    if (object) {
       const result=Object.values(object)
        .map(e => e.name ? e.name : e).join(', ');
        console.log(result)
        return result;
    } else {
        return 'none'
    }
}
