/* eslint-disable @stylistic/js/linebreak-style */
/* eslint-disable @stylistic/js/indent */
const { test , describe } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for-testing').reverse

describe('Reverse', () => {
    test('reverse of a', () => {
        const result = reverse('a')

        assert.strictEqual(result, 'a')
    })

    test('reverse of react', () => {
        const result = reverse('react')

        assert.strictEqual(result, 'tcaer')
    })

    test('reverse of saippuakauppias', () => {
        const result = reverse('saippuakauppias')

        assert.strictEqual(result, 'saippuakauppias')
    })
})