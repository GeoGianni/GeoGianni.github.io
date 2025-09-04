import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
            <div className="resume-item border-line-h old">
                <div className="date">2023 - 2025</div>
                <div className="name">Senior Developer</div>
                <div><b><i>BeraTone</i></b></div>
                <div className="company">BeraTone Technologies</div>
                <ul>
                  <li>Built core multiplayer infrastructure using Photon’s Quantum 3 deterministic engine (ECS architecture).</li>
                  <li>Coordinated with Art, Sound, Animation, and Level Design teams; supported leadership on gameplay and MMORPG systems.</li>
                  <li>Produced and co-directed game trailer that helped secure $2M in seed investment.</li>
                  <li>Designed and implemented player-facing systems including 70+ quests, crafting/recipes, reputation & dialogue for 50+ NPCs, cosmetics, housing & decoration, and one-time drops.</li>
                  <li>Created level design tools, workflow automation, prototype UIs, and asset organization systems that improved development efficiency.</li>
                  <li>Guided level designers through concept, gameplay, and content passes for multiple environments across 6 levels.</li>
                  <li>Authored and maintained in-house notion, GDDs, TDDs, and feature specifications.</li>
                  <li>Scoped and delivered multiple partner/corporate collaborations, including Web3 integrations.</li>
                </ul>
              </div>
          <div className="resume-item border-line-h old">
                <div className="date">2022 - 2023</div>
                <div className="name">Solo Developer</div>
                <div><b><i>The Final Bastion</i></b></div>
                <div className="company">GeoGianni Games</div>
                <ul>
                  <li>Developed a real-time multiplayer game using Photon's PUN & Steam integrations</li>
                  <li>Used A* to create real-time Tower Defense Pathfinding for enemies</li>
                  <li>Managed player progression and in-game currency through real-time database using Firebase for Unity3D</li>
                  <li>Created prefab levels in Unity each with multiple settings including time of day and difficulty</li>
                  <li>Created and balanced a roster of 25+ towers & 50+ minions across PvP and PvE gamemodes</li>
                  <li>Managed a small game project on a minimal budget from beta to an early access release</li>
                </ul>
              </div>
              <div className="resume-item border-line-h old">
                <div className="date">2019 - 2020</div>
                <div className="name">Lead Backend Engineer</div>
                <div className="company">PlateChasr</div>
                <ul>
                  <li>Developed and Operated an application backend software and database using JAVA, JSON and Firebase</li>
                  <li>Launched and Maintained Apple IOS release & Oversaw application crowd testing</li>
                  <li>Aligned Administrative & Corporate decisions with technical needs through direct communication</li>
                </ul>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            
          <div className="resume-items">
            <div className="resume-item border-line-h old">
                <div className="date">2023 - 2024</div>
                <div className="name">Lead Developer</div>
                <div><b><i>Unreleased Title</i></b></div>
                <div className="company">Freelance Client</div>
                <ul>
                    <li>reated detailed development timeline from conception, including crowd funding, social media outreach, and potential partnerships</li>
                    <li>Designed and Implemented Core Gameplay Systems including Enemy AI, Weapon System, Base Building System</li>
                    <li>Created A Living Dynamic simulation including Procedural Generation, A Dynamic Faction System, and multiple simulation grids</li>
                </ul>
              </div>
            <div className="resume-item border-line-h old">
                <div className="date">2021 - 2023</div>
                <div className="name">Senior Developer</div>
                <div><b><i>Fire & Maneuver</i></b></div>
                <div className="company">Armchair Historian Interactive</div>
                <ul>
                  <li>Created and operated database containing 7 unlock-able nations, player progression and seasonal rankings</li>
                  <li>Designed and implemented core turn-based multiplayer gameplay systems including player unit and AI battle mechanics, multiple victory conditions, and perk system</li>
                  <li>Lead concept and development for the Cover and Destructible Building System and Environmental Tiles and Effects</li>
                  <li>Implemented Game Art in the form of levels, water, season, and dynamic time shaders and other Effects</li>
                  <li>Wrote and Implemented extensive Tutorials, History based Scenarios & an in-mission Task System</li>
                  <li>Created and maintained a game level and logic creator that created all 25+ maps and 10+ scenarios</li>
                </ul>
              </div>
              <div className="resume-item border-line-h old">
                <div className="date">April 2022</div>
                <div className="name">Unity Developer / VFX Artist</div>
                <div><b><i>Saturday Night Live</i></b></div>
                <div className="company">NBCUniversal</div>
                <ul>
                  <li>Worked with leadership to independently bring a scene from concept to final render</li>
                  <li>Advised management on improved revision work flow for greater vision accuracy</li>
                  <li>Created multiple 11th hour assets, including modeling, texturing, and finalizing to render</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;
