"use client"

import { Button, Flex, Heading } from "@radix-ui/themes"
import { motion, Variants } from "framer-motion"
import useCounterStore from "./store"

const Counter = () => {
	const { count, inc, dec } = useCounterStore()

	const transition = (delay: number): Variants => ({
		initial: {
			y: 100,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: { delay },
		},
	})

	return (
		<Flex justify="center" align="center" direction="column" height="100dvh">
			<motion.div {...transition(0)}>
				<Heading size="9" mb="5">
					{count}
				</Heading>
			</motion.div>
			<Flex gap="5">
				<motion.div {...transition(0.05)}>
					<Button variant="soft" size="3" onClick={inc}>
						Increase
					</Button>
				</motion.div>
				<motion.div {...transition(0.1)}>
					<Button variant="soft" size="3" onClick={dec}>
						Decrease
					</Button>
				</motion.div>
			</Flex>
		</Flex>
	)
}

export default Counter
