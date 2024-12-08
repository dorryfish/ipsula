function replacePathInField(field) {
    // This is a placeholder for whatever logic you need to apply to field
    return field.replace('oldPath', 'newPath');
}

// Example array of fields to process
let inputFields = ['name', 'age', '*', 'address'];
let fields = [];

// Process each field in inputFields
for (let field of inputFields) {
    fields.push(field === '*' ? null : replacePathInField(field));
}

console.log(fields); // Output will be: ['name', 'age', null, 'address']
