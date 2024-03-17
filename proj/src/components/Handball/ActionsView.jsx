import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";

const AttackButtons = [
    { id: 1, name: "Travelling", icon: "SaveIcon"  },
    { id: 2, name: "Double dribble", icon: "SaveIcon"  },
    { id: 3, name: "Forcing", icon: "SaveIcon"  },
    { id: 4, name: "Lost ball", icon: "SaveIcon"  },
    { id: 5, name: "Countered Shot", icon: "SaveIcon"  },
    { id: 6, name: "2 min provoked", icon: "SaveIcon"  },
    { id: 7, name: "7m provoked", icon: "SaveIcon"  },
    { id: 8, name: "One-on-one won", icon: "SaveIcon"  },
]

const DefenseButtons = [
    { id: 1, name: "7m conceded", icon: "SaveIcon"  },
    { id: 2, name: "One-on-one lost", icon: "SaveIcon"  },
    { id: 3, name: "Free throw", icon: "SaveIcon"  },
    { id: 4, name: "Countered Shot", icon: "SaveIcon"  },
    { id: 5, name: "Offensive foul", icon: "SaveIcon"  },
    { id: 6, name: "Stealing", icon: "SaveIcon"  },
]

const SanctionButtons = [
    { id: 1, name: "Red card", icon: "SaveIcon"  },
    { id: 2, name: "Yellow card", icon: "SaveIcon"  },
    { id: 3, name: "2 minutes", icon: "SaveIcon"  },
]

const selectedButtons = (type)=> {
    switch(type) {
        case 'attack':
            return AttackButtons;
        case 'defense':
            return DefenseButtons;
        case 'sanction':
            return SanctionButtons;
    }
}

function ActionsView(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <div className="flex-container" style={{ position: 'absolute', zIndex: '3', backgroundColor: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid #000'}}>
        <ButtonGroup
          variant="contained"
          aria-label="Loading button group"
          orientation="vertical"
        >
            {selectedButtons(props.type).map((button) => (
                <Button key={button.id} startIcon={< SaveIcon/>}>
                {button.name}
                </Button>
            ))}
               
          
        </ButtonGroup>
      </div>
    </>
  );
}

export default ActionsView;
