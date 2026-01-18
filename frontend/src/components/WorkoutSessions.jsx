import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" id="plans">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Our training sessions are designed to improve strength, endurance,
          and overall fitness. Each workout is guided by certified trainers
          and structured to deliver real results, whether you're a beginner
          or an experienced athlete.
        </p>
        <img src="/img5.jpg" alt="Workout training session" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          High-intensity bootcamps focused on full-body transformation.
          These programs combine cardio, strength training, and functional
          movements to push your limits and build discipline.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning</h4>
            <p>
              Build muscle, improve power, and increase stamina using
              progressive strength training techniques.
            </p>
          </div>

          <div>
            <h4>HIIT Fat Burn</h4>
            <p>
              Fast-paced, calorie-burning sessions designed to accelerate
              fat loss and boost cardiovascular health.
            </p>
          </div>

          <div>
            <h4>Functional Training</h4>
            <p>
              Improve mobility, balance, and everyday strength with
              movement-based workouts that enhance real-life performance.
            </p>
          </div>

          <div>
            <h4>Core & Endurance</h4>
            <p>
              Focused sessions to strengthen your core, improve posture,
              and increase overall endurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
