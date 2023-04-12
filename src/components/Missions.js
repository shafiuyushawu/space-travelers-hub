import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import './styles/missionsStyles.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();
  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div>
      <div className="missions-grid">
        <div className="header-row">
          <div className="missions-header">Mission</div>
          <div className="missions-header-description">Description</div>
          <div className="missions-header-status">Status</div>
        </div>
        {missions.map((mission) => (
          <div key={mission.mission_id} className="mission-row">
            <div className="mission-name">{mission.mission_name}</div>
            <div className="mission-description">{mission.description}</div>
            <div className="mission-status">
              <button className="member-button" type="button">NOT A MEMBER</button>
            </div>
            <div className="mission-status">
              <button className="mission-button" type="button" onClick={() => handleJoinMission(mission.mission_id)}>Join Mission</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
