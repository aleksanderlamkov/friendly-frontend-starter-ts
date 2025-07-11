import tsEslint from 'typescript-eslint'
import baseConfig from 'friendly-frontend-lint-config/eslint'

export default [...baseConfig, ...tsEslint.configs.recommended]
