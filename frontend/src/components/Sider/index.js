import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
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
        {mainRoutes.map(route =>
          !route.showOnMenu ||
          !route.auth ||
          (!route.permission && props.user) ||
          (props.user && props.user.permissions.includes(route.permission)) ? (
            !route.children ? (
              !route.hideOnMenu ? (
                <Menu.Item key={route.path || '/notfound'} icon={route.icon}>
                  <Link key={route.path} to={route.path || '/notfound'}>
                    <span>{route.name}</span>
                  </Link>
                </Menu.Item>
              ) : (
                <React.Fragment />
              )
            ) : (
              <SubMenu key={route.path} icon={route.icon} title={route.name}>
                {route.children.map(child => (
                  <Menu.Item icon={child.icon} key={child.path}>
                    <Link key={child.path} to={child.path || '/notfound'}>
                      <span>{child.name}</span>
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
