let data = '{ "age" : 21 }'
try {
    let user = JSON.parse(data)
    if (!user.name) {
        throw new SyntaxError('Incompleted data: no data')
    }
    console.log('Start of try runs')
    console.log(user.name)
} catch(e) {
    console.log('Error has occured: ', + e)
} finally {
    console.log('This always runs')
}