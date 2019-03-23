// 'string'.repeat(count)
const count = 30;
for (let i = 0; i < count; i+=2) {
    console.log(' '.repeat(count - 1 - i) + '/' + ' '.repeat(i *2) + '\\');
}
