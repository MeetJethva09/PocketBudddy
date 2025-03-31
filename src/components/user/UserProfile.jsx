import React from 'react'
import "../../assets/uprofile.css"

export const UserProfile = () => {
  return (
    <div>
 <div className="user-profile-container">
      <div className="user-profile">
        <div className="user-avatar">
          <img src='/src/assets/images/user.png' />
        </div>
        
        <div className="user-info">
          <h2 className="user-name">user</h2>
          <p className="user-title">uhuhuh</p>
          <div className="user-stats">
            <div className="stat-item">
              <span className="stat-value">revi</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">bhyvyvv</span>
              <span className="stat-label">Following</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">kuhuuh</span>
              <span className="stat-label">Followers</span>
            </div>
          </div>
        </div>
        
        <div className="user-restaurant-info">
          <div className="restaurant-meta">
            <div className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>njjjbbubub</span>
            </div>
            <div className="meta-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>hourrr</span>
            </div>
          </div>
          <div className="restaurant-rating">
            <div className="rating-stars">
            
                <svg 
                  key=''
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill=''
                  stroke="#FFD700" 
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
             
            </div>
            <span className="rating-value">rev</span>
            <span className="rating-count"> reviews</span>
          </div>
        </div>
        
        <div className="user-actions">
          <button className="btn btn-primary">Follow</button>
          <button className="btn btn-outline">Message</button>
        </div>
      </div>
      
      <div className="user-bio">
        <p>boiiii</p>
       
          <div className="user-specialties">
            <strong>Specialties: mkn</strong>
           
          </div>
        
      </div>
    </div>    

    </div>
  )
}
