import axios from 'axios'
import { apiURL } from 'test/constant'
import { describe, expect, it } from 'vitest'

describe('should validate feature-flag routes', () => {
  it('should validate valid feature-flag routes', async () => {
    const { status, data } = await axios.get(`${apiURL}/data/feature-flag`)
    expect(status).toBe(200)
    expect(data).toBeDefined()
    expect(data).toStrictEqual({
      FF_SHOW_PROFILE_IMAGE: true,
    })
  })
})
