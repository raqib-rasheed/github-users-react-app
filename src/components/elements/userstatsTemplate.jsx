export default function StatsTemplate(props) {
  const { children: Icon, stat, label } = props;
  return (
    <div className="col-sm-3">
      <div className="card light-bg">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            {Icon}
            <div className="d-flex-column mx-2">
              <h5 className="text-primary">{stat}</h5>
              <h6>{label}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
