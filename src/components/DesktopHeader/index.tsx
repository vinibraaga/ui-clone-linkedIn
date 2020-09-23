import React from 'react';

import { 
    Container, 
    Wrapper, 
    LinkedInIncon, 
    SearchInput, HomeIcon, 
    NotificationIcon, 
    ProfileCircle, 
    CaretDownIcon
 } from './styles';

const DesktopHeader: React.FC = () => {
  return (
      <Container>
          <Wrapper>
              <div className="left">
                  <LinkedInIncon />
                  <SearchInput placeholder='Pesquisar'/>
              </div>

              <div className='right'>
                  <nav>
                      <button className='active'>
                          <HomeIcon />
                          <span>Inicio</span>
                      </button>
                      <button>
                          <NotificationIcon />
                          <span>Notificações</span>
                      </button>
                      <button>
                          <ProfileCircle src="https://github.com/vinibraaga.png "/>
                          <span>
                              Eu <CaretDownIcon />
                          </span>
                      </button>
                  </nav>
              </div>
          </Wrapper>
      </Container>
  );
}

export default DesktopHeader;