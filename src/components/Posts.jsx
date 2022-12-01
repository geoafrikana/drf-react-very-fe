import React from 'react';
import {Container,
        Grid, Card, CardMedia, CardContent, Typography, styled
} from '@mui/material'

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9
})

// const StyledCardHeader = styled(CardHeader)({
// 	backgroundColor:
// 			theme.palette.type === 'light'
// 				? theme.palette.grey[200]
// 				: theme.palette.grey[700],
// })

const StyledPostTitle = styled(Typography)({
  fontSize: '16px',
  textAlign: 'left',
})

const StyledPostText = styled('div')(({theme})=>({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}))

// const StyledLink = styled(Typography)(({theme})=>({
//   margin: theme.spacing(1, 1.5),
// }))


const Posts = (props) => {
	const { posts } = props;
	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card>
									<StyledCardMedia
										image="https://source.unsplash.com/random"
										title="Image title"
									/>
									<CardContent >
										<StyledPostTitle
											gutterBottom
											variant="h6"
											component="h2"
										>
											{post.title.substr(0, 50)}...
										</StyledPostTitle>
										<StyledPostText>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{post.excerpt.substr(0, 60)}...
											</Typography>
										</StyledPostText>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;