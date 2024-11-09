@smokeall
Feature: New tours validation

    Background: Load url
        Given User Opens URL
    @smoke
    Scenario: Home page

        When I login as
            | username | password |
            | mercury  | mercury  |
        When User clicks on Submit
        When User verifies title "Login: Mercury Tours"

    Scenario: Verify title

        When I login as
            | username | password |
            | mercury  | mercury  |
        When User clicks on Submit
        When User verifies title "Login: Mercury Tourss"

