import { Route } from "react-router-dom";
import React, { Component } from "react";
import ArticleList from "./articles/ArticleList";
import ArticleForm from "./articles/ArticleForm";
import ArticleEditForm from "./articles/ArticleEditForm";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
          exact path="/articles" render={props => {
            return <ArticleList 
              {...props}
            />
          }}
        />

        <Route
          path="/articles/new" render={props => {
            return <ArticleForm
              {...props}
            />
          }}
        />
        
        <Route
          path="/articles/:articleId(\d+)/edit" render={props => {
            return <ArticleEditForm
              {...props}
            />
          }}
        />
      </React.Fragment>
    );
  }
}
