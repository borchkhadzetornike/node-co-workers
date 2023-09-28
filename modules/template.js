function fill(temp, worker) {
    let result;

    result = temp.replace(/{{ID}}/g, worker.id)
    result = result.replace(/{{NAME}}/g, worker.name)
    result = result.replace(/{{SURNAME}}/g, worker.surname)
    result = result.replace(/{{POSITION}}/g, worker.position)
    result = result.replace(/{{EMAIL}}/g, worker.email)
    result = result.replace(/{{DEPARTMENT}}/g, worker.department)
    result = result.replace(/{{HIREDATE}}/g, worker.hireDate)
    result = result.replace(/{{PHONE}}/g, worker.phone)
    result = result.replace(/{{ADDRESS}}/g, worker.address)
    result = result.replace(/{{BIRTHDAY}}/g, worker.birthday)
    result = result.replace(/{{SALARY}}/g, worker.salary)

    return result
}

module.exports = {
    fill
}

