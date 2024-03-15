import React, { useContext } from 'react';
import StateContext from '../../StateContext';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import useWindowDimensions from '../Utils/useWindowDimensions.js';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useLocation } from 'react-router-dom';
import { appSettings } from '../Utils/constants.js';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Footer() {
  const [value, setValue] = React.useState(0);
  const { height, width } = useWindowDimensions();
  const location = useLocation();
  const appState = useContext(StateContext);

  const navigate = useNavigate();

  function BottomNav() {
    return (
      <Box sx={{ width: '100%', zIndex: 9999, bottom: '0px', position: 'relative' }}>
        <BottomNavigation
          sx={{
            backgroundColor: '#1976d2',
            height: '70px',
            color: 'white',
            zIndex: 9999
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction
            label="Home"
            icon={
              <HomeIcon
                sx={{
                  color: 'white'
                }}
              />
            }
            onClick={() => navigate('/')}
            sx={{
              color: '#ccc',
              '&& .Mui-selected': {
                color: 'white'
              }
            }}
          />
          <BottomNavigationAction
            label="Statistics"
            icon={
              <MapIcon
                sx={{
                  color: 'white'
                }}
              />
            }
            onClick={() => navigate('/statistics')}
            sx={{
              color: '#ccc',
              '&& .Mui-selected': {
                color: 'white'
              }
            }}
          />
          <BottomNavigationAction
            label="Statistics"
            icon={
              <InfoIcon
                sx={{
                  color: 'white'
                }}
              />
            }
            onClick={() => navigate('/statistics')}
            sx={{
              color: '#ccc',
              '&& .Mui-selected': {
                color: 'white'
              }
            }}
          />
          {appState.loggedIn ? (
            <BottomNavigationAction
              label="Options"
              icon={
                <QuestionAnswerIcon
                  sx={{
                    color: 'white'
                  }}
                />
              }
              onClick={() => navigate('/options')}
              sx={{
                color: '#ccc',
                '&& .Mui-selected': {
                  color: 'white'
                }
              }}
            />
          ) : (
            ''
          )}
        </BottomNavigation>
      </Box>
    );
  }

  return (
    <>
      {width < appSettings.mobileBreakpoint ? (
        location.pathname === '/' ||
        location.pathname === '/handball' ||
        location.pathname === '/options' ? (
          <BottomNav />
        ) : (
          ''
        )
      ) : (
        <footer
          className="footer border-top text-center small text-muted p-2 my-0"
          style={{ backgroundColor: '#1976d2' }}>
          <div style={{ color: 'white' }}>
            <Link
              to="/"
              className="mx-1"
              style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }}>
              Home
            </Link>{' '}
            |{' '}
            <Link
              className="mx-1"
              to="/handball"
              style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }}>
              Handball
            </Link>{' '}
            |{' '}
            <Link
              className="mx-1"
              to="/about"
              style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }}>
              About
            </Link>{' '}
            {appState.loggedIn ? (
              <Link
                className="mx-1"
                to="/ux"
                style={{ textDecoration: 'none', fontWeight: '600', color: 'white' }}>
                Options
              </Link>
            ) : (
              ''
            )}{' '}
            <span>
              {' '}
              - Copyright &copy; {new Date().getFullYear()} HandyStats.
            </span>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
