'use strict'

/**
 * Dependencies
 */

const TeamCard = require("../TeamCard/TeamCard")

/**
 * Data
 */

const data = [
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"},
  {name: "Andy Bettisworth", email: "andy@accreu.com", github: "https://github.com/wurde", role: "UI"}
]

/**
 * Define component
 */

class TeamSection {
  constructor(element) {
    this.element = element
    
  }
}

/**
 * Mount component
 */

let team_section = new TeamSection(document.getElementById("team-section"))
