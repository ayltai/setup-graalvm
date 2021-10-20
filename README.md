# GraalVM GitHub action

[![GitHub workflow status](https://img.shields.io/github/workflow/status/ayltai/setup-graalvm/CI?style=flat)](https://github.com/ayltai/setup-graalvm/actions)
[![Code Quality](https://img.shields.io/codacy/grade/d7d26464c65348068815d36757c3c0aa.svg?style=flat)](https://app.codacy.com/app/AlanTai/setup-graalvm/dashboard)
[![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/ayltai_setup-graalvm?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Sonar Violations (short format)](https://img.shields.io/sonar/violations/ayltai_setup-graalvm?format=short&server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/setup-graalvm.svg?style=flat)](https://codecov.io/gh/ayltai/setup-graalvm)
[![Sonar Coverage](https://img.shields.io/sonar/coverage/ayltai_setup-graalvm?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_setup-graalvm&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_setup-graalvm&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/ayltai_setup-graalvm?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_setup-graalvm&metric=security_rating)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ayltai_setup-graalvm&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ayltai_setup-graalvm)
![Maintenance](https://img.shields.io/maintenance/yes/2021)
[![Release](https://img.shields.io/github/release/ayltai/setup-graalvm.svg?style=flat)](https://github.com/ayltai/setup-graalvm/releases)
[![License](https://img.shields.io/github/license/ayltai/setup-graalvm.svg?style=flat)](https://github.com/ayltai/setup-graalvm/blob/master/LICENSE)

This action sets up a GraalVM environment for use in [GitHub](https://github.com) [Actions](https://github.com/features/actions) by:
* downloading and caching a requested version of [GraalVM](https://www.graalvm.org) and adding to `PATH`
* optionally downloading [GraalVM Native Image](https://www.graalvm.org/getting-started/#native-images)
* registering problem matchers for error output

[![Buy me a coffee](https://img.shields.io/static/v1?label=Buy%20me%20a&message=coffee&color=important&style=flat&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoff.ee/ayltai)

## Usage
See [action.yaml](https://github.com/ayltai/setup-graalvm/blob/master/action.yml)

### Basic
```yaml
steps:
  - uses: actions/checkout@v2
  - uses: ayltai/setup-graalvm@v1
    with:
      java-version: 11
      graalvm-version: 21.1.0
      native-image: true
  - run: java -version
```

## Configuration
| Property          | Required | Default | Description |
|-------------------|----------|---------|-------------|
| `java-version`    | Yes      |         | A major Java version. Only `8`, `11` and `17` (targeting GraalVM v21.3.0) are supported. |
| `graalvm-version` | Yes      |         | A GraalVM release. Supported values are `21.3.0`, `21.2.0`, `21.1.0`, `21.0.0.2`, `21.0.0`, `20.3.2`, `20.3.1.2`, `20.3.1`, `20.3.0`, `20.2.0`, `20.1.0`, `20.0.1`, `20.0.0`, `19.3.2`, `19.3.1`, `19.3.0.2` and `19.3.0`. See [GraalVM releases](https://github.com/graalvm/graalvm-ce-builds/releases) |
| `native-image`    | No       | `false` | `true` to download GraalVM `native-image`. |

## Spring Boot applications
If you are building Spring Boot applications with GraalVM or GraalVM native image, you may consider using [Spring GraalVM Native Gradle plugin](https://plugins.gradle.org/plugin/com.github.ayltai.spring-graalvm-native-plugin).

## License
[MIT](https://github.com/ayltai/setup-graalvm/blob/master/LICENSE)

## References
* [GraalVM](https://www.graalvm.org)
* [GraalVM Native Image](https://www.graalvm.org/getting-started/#native-images)
