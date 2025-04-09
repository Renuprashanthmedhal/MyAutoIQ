import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmails } from "../../redux/actions/emailActions";
import { parseDate } from "../../utils/dateUtils";
import EmailItem from "./EmailItem";

const EmailList = () => {
  const dispatch = useDispatch();
  const { emails, loading, error } = useSelector((state) => state.emails);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);
  const sortedEmails = useMemo(() => {
    return [...emails].sort((a, b) => {
      const dateA = parseDate(a.sent);
      const dateB = parseDate(b.sent);
      return dateB - dateA;
    });
  }, [emails]);
  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  if (error) return <div className="alert alert-danger mt-3">{error}</div>;

  return (
    <div className="email-list mt-3">
      <div className="row">
        <div className="col-12 mb-3 d-flex justify-content-center align-items-center flex-column">
          <h4>Name: Jill Jones</h4>
          <h6>Email: jillJones@gmail.com</h6>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Original</h5>
              <p className="card-text">Source: CarQuery</p>
              <p className="card-text">Lead: 30 January 2024</p>
              <p className="card-text">Intrested Vehicle: 2023 Honda Civic</p>
              <p className="card-text">Status: Lost</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Revival</h5>
              <p className="card-text">Source: WalkIn</p>
              <p className="card-text">Lead: 23 October 2024</p>
              <p className="card-text">Intrested Vehicle: 2023 Honda Civic</p>
              <p className="card-text">Status: Sold</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Email Campaigns</h2>
      <div className="path-nav mb-3">
        <small>
          Dormant Campaigns / View Campaigns (Altoona Honda) / Filtered By
          CONTACTED / Jill Jones
        </small>
      </div>
      {sortedEmails.length === 0 ? (
        <div className="alert alert-info">No emails found</div>
      ) : (
        sortedEmails.map((email, index) => (
          <EmailItem key={index} email={{ ...email, id: index }} />
        ))
      )}
    </div>
  );
};

export default EmailList;
