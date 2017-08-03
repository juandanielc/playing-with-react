import React from 'react';
import HeroRow from './HeroRow';

export default (props) => (
		<ul className="heroes">{
				props.heroes.map( (t) => (
							<HeroRow key={t.id}
									 id={t.id}
									 removeHero={() => props.removeHero(t.id)}
									 setSelected={() => props.setSelected(t.id)}
									 className={props.selected === t.id ? 'selected' : ''}
							         name={t.name}
							      />
						   )
				)
			}
		</ul>
	)
