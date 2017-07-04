import test from 'ava'
import i18n from '../lib/i18n'

test.beforeEach(t => {
    t.context.en = { "hello": "hi" }
    t.context.fr = { "hello": "bonjour" }
    t.context.def = { "hello": "hola" }
})

test.afterEach(t => {
    i18n.clear()
})

test('[DEPRECATED] use import to register one language', t => {
    i18n.import(t.context.en, ['en', 'US'])
    t.pass()
})

test('use addLang to register one language', t => {
    i18n.addLang(t.context.en, ['en', 'US'])
    t.pass()
})

test('navigator is en-US', t => {
    t.deepEqual(navigator.language, "en-US")
})

test('you can init the i18n with one language', t => {
    i18n.addLang(t.context.en, ['en', 'US'])
    i18n.init()
    t.pass()
})

test('you can init the i18n with two language', t => {
    i18n.addLang(t.context.en, ['en', 'US'])
    i18n.addLang(t.context.fr, ['fr', 'FR'])
    i18n.init()
    t.pass()
})

test('you can init the i18n with default', t => {
    i18n.addLang(t.context.def, 'default')
    i18n.addLang(t.context.fr, ['fr', 'FR'])
    i18n.init()
    t.pass()
})

test('i18n say hi when english is register and navigator is english', t => {
    i18n.addLang(t.context.en, ['en', 'US'])
    i18n.init()
    t.deepEqual("hi", i18n.hello)
})

test('i18n say hola when default (spanish) is register and navigator is english', t => {
    i18n.addLang(t.context.def, 'default')
    i18n.init()
    t.deepEqual("hola", i18n.hello)
})

test('i18n choose correct language ', t => {
    i18n.addLang(t.context.def, 'default')
    i18n.addLang(t.context.fr, ['fr', 'FR'])
    i18n.addLang(t.context.en, ['en', 'US'])
    i18n.init()
    t.deepEqual("hi", i18n.hello)
})

test('i18n choose correct language when locale is different', t => {
    i18n.addLang(t.context.def, 'default')
    i18n.addLang(t.context.fr, ['fr', 'FR'])
    i18n.addLang(t.context.en, ['en', 'CA'])
    i18n.init()
    t.deepEqual("hi", i18n.hello)
})

test('i18n crash when there are not correct langage', t => {
    const error = t.throws(() => {
        i18n.addLang(t.context.fr, ['fr', 'FR'])
        i18n.init()
        console.log(i18n.hello)
    }, Error)

    t.is(error.message, 'Cannot found lang')
})

test('i18n crash when there are not property', t => {
    const error = t.throws(() => {
        i18n.addLang(t.context.en, ['en', 'CA'])
        i18n.init()
        console.log(i18n.bank)
    }, Error)

    t.is(error.message, '[i18n] Cannot found bank property')
})
