import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Layout, Menu } from 'antd';

import mainRoutes from 'routes/mainRoutes';
import { makeSelectUser } from 'global.selectors';

const { SubMenu } = Menu;

/* eslint-disable indent */
function Sider(props) {
  return (
    <Layout.Sider>
      <Menu key="main" theme="dark" selectedKeys={[props.location.pathname]} mode="inline">
        {mainRoutes.map((route, index) =>
          !route.auth ||
          (!route.permission && props.user) ||
          (props.user && props.user.permissions.includes(route.permission)) ? (
            !route.sub ? (
              <Menu.Item key={index || '/notfound'} icon={route.icon}>
                <Link key={route.path} to={route.path || '/notfound'}>
                  <span>{route.name}</span>
                </Link>
              </Menu.Item>
            ) : (
              <SubMenu key={index} icon={route.icon} title={route.name}>
                {route.sub.map((sub, index) => (
                  <Menu.Item icon={sub.icon} key={index}>
                    <Link key={route.path} to={route.path || '/notfound'}>
                      <span>{sub.name}</span>
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            )
          ) : (
            <React.Fragment />
          ),
        )}
      </Menu>
    </Layout.Sider>
  );
}

Sider.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(withRouter(props => <Sider {...props} />));
