import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

export const Faq = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is this about and how does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 3 }}>
            <Typography typography={{ fontWeight: "bold" }}>Why?</Typography>{" "}
            You can gain more XP and therefore level faster on Zwift if workouts
            are specially arranged.
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography typography={{ fontWeight: "bold" }}>What?</Typography>{" "}
            Zwift grants more XP for interval blocks than steady state, warmup
            or cooldown blocks. If you're getting your workouts from trainers
            via Intervals.icu, TrainingPeaks or creating them on your own, there
            are probably a lot of steady state, warmup or cooldown blocks used
            because that's essentially your prescribed training.
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography typography={{ fontWeight: "bold" }}>How?</Typography>{" "}
            This tool modifies Zwift workout files (.zwo) so that they leverage
            several{" "}
            <a href="https://zwiftinsider.com/earn-more-xp/">
              XP hacking approaches
            </a>
            . It will not change its intensity, duration or resulting workload!
          </Box>

          <Box>
            <Typography typography={{ fontWeight: "bold" }}>
              So what?
            </Typography>{" "}
            This tool makes little changes to your workouts so that you get more
            XP for the same amount of physical and mental work that you put in.
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is Zwift workout optimization cheating?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ mb: 3 }}>
            Is it? Let's put some facts and thoughts on the table so you can
            decide yourself:
          </Typography>
          <ul style={{ marginBottom: 24 }}>
            <li>
              Optimized Zwift workouts do still{" "}
              <strong>require the same physical and mental effort</strong> from
              you.
            </li>
            <li>
              Optimized Zwift workouts{" "}
              <strong>can also be manually created</strong> using Zwifts
              built-in workout building tool.
            </li>
            <li>
              Zwift workout block XP are generated by type of block instead of
              effort <strong>which is a bit "unfair"</strong>.
            </li>
          </ul>
          <Typography sx={{ mb: 3 }}>
            This tool is an offer that you can reject. It's also a little piece
            of hacktivism against Zwift as the most popular and very revenue
            strong indoor endurance platform. It demonstrates (minor) flaws in
            the system and puts the finger into the wound. What the wound is?
            Zwift is not changing or improving very often in its core. There are
            dozens of bugs that remain unfixed for months and years. It's
            questionable if that's "enough" for such a well-paying software
            product. That's bad for Zwift users but will in the end hurt
            themselves most as competition is probably not sleeping.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
